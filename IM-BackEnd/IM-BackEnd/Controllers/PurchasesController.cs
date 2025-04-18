using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace IM_BackEnd.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public PurchasesController(AppDbContext context) => _context = context;

        [HttpPost]
        public async Task<IActionResult> RecordPurchase(Purchase purchase)
        {
            var product = await _context.Products.FindAsync(purchase.ProductId);
            if (product == null) return BadRequest("Invalid product");

            product.Quantity += purchase.QuantityPurchased;
            _context.Purchases.Add(purchase);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }

}
