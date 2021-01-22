using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PracaInzynierskaAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersWithRolesController : ControllerBase
    {
        private AuthenticationContext _context;
        private UserManager<ApplicationUser> _userManager;
        private SignInManager<ApplicationUser> _signInManager;
        public UsersWithRolesController(AuthenticationContext application, UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
        {
            _context = application;
            _userManager = userManager;
            _signInManager = signInManager;        
        }

        [HttpGet]
        [Route("All")]
        public async Task<Object> GetUsersAll()
        {
            List<string> userids = _context.UserRoles.Where(a => a.RoleId != "").Select(b => b.UserId).Distinct().ToList();
            //The first step: get all user id collection as userids based on role from db.UserRoles

            List<ApplicationUser> listUsers = _context.Users.Where(a => userids.Any(c => c == a.Id)).ToList();
            return new JsonResult(listUsers);


        }

        [HttpGet]
        [Route("Drivers")]
        public async Task<Object> GetUsersDrivers()
        {
            List<string> userids = _context.UserRoles.Where(a => a.RoleId == "3").Select(b => b.UserId).Distinct().ToList();
            //The first step: get all user id collection as userids based on role from db.UserRoles

            List<ApplicationUser> listUsers = _context.Users.Where(a => userids.Any(c => c == a.Id)).ToList();
            return new JsonResult(listUsers);
        }
        [HttpGet]
        [Route("Logisticians")]
        public async Task<Object> GetUsersLogisticians()
        {
            List<string> userids = _context.UserRoles.Where(a => a.RoleId == "2").Select(b => b.UserId).Distinct().ToList();
            //The first step: get all user id collection as userids based on role from db.UserRoles

            List<ApplicationUser> listUsers = _context.Users.Where(a => userids.Any(c => c == a.Id)).ToList();
            return listUsers;
        }
        [HttpGet]
        [Route("Admins")]
        public async Task<Object> GetUsersAdmins()
        {
            List<string> userids = _context.UserRoles.Where(a => a.RoleId == "1").Select(b => b.UserId).Distinct().ToList();
            //The first step: get all user id collection as userids based on role from db.UserRoles

            List<ApplicationUser> listUsers = _context.Users.Where(a => userids.Any(c => c == a.Id)).ToList();
            return listUsers;
        }
        [HttpGet]
        [Route("LogisticiansAndDrivers")]
        public async Task<Object> GetUsersLogisticiansAndDrivers()
        {
            List<string> userids = _context.UserRoles.Where(a => a.RoleId != "1").Select(b => b.UserId).Distinct().ToList();
            //The first step: get all user id collection as userids based on role from db.UserRoles

            List<ApplicationUser> listUsers = _context.Users.Where(a => userids.Any(c => c == a.Id)).ToList();
            return listUsers;
        }

        /*
        public async Task<Object> GetUsers()
        {
            return _context.Users.ToList();
        }
        */
    }
}
