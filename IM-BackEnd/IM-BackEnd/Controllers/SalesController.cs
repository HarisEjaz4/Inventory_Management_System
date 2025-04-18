using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace IM_BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public SalesController(AppDbContext context) => _context = context;

        [HttpPost]
        public async Task<IActionResult> RecordSale(Sale sale)
        {
            var product = await _context.Products.FindAsync(sale.ProductId);
            if (product == null || product.Quantity < sale.QuantitySold)
                return BadRequest("Invalid sale");

            product.Quantity -= sale.QuantitySold;
            _context.Sales.Add(sale);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }

}


