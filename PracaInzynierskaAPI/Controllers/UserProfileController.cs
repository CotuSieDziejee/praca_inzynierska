using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PracaInzynierskaAPI.Models;

namespace PracaInzynierskaAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private UserManager<ApplicationUser> _userManager;
        public UserProfileController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        //GET : /api/UserProfile
        public async Task<Object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.FullName,
                user.Email,
                user.UserName
            };
        }

        [HttpGet]
        [Authorize(Roles = "Admin", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForAdmin")]
        public string GetForAdmin()
        {
            return "Web method for Admin";
        }

        [HttpGet]
        [Authorize(Roles = "Logistician", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForLogistician")]
        public string GetLogistician()
        {
            return "Web method for Logistician";
        }

        [HttpGet]
        [Authorize(Roles = "Driver", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForDriver")]
        public string GetDriver()
        {
            return "Web method for Driver";
        }

        [HttpGet]
        [Authorize(Roles = "Admin,Logistician", AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        [Route("ForAdminOrLogistician")]
        public string GetForAdminOrLogistician()
        {
            return "Web method for Admin or Logistician";
        }
    }
}
