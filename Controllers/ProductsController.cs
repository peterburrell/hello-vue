using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace hello_vue.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 20).Select(id => new Product
            {
                Id = id,
                Name = $"Product {id}",
                Description = $"Product Description {id}",
                Price = rng.Next(10, 100)
            });
        }

        public class Product
        {
            public long Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public int Price { get; set; }
        }
    }
}
