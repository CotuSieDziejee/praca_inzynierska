using Microsoft.AspNetCore.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PI.Web.Models
{
    public class ApplicationUser : Microsoft.AspNet.Identity.EntityFramework.IdentityUser
    {
    }

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext() : base("DefaultConnection", throwIfV1Schema: false)
        {

        }
    }
}
