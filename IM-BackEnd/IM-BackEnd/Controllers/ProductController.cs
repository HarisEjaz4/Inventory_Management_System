using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using Microsoft.EntityFrameworkCore;

namespace IM_BackEnd.Controllers
{
    
        [ApiController]
        [Route("api/[controller]/[action]")]
        public class ProductsController : ControllerBase
        {
            private readonly AppDbContext _context;

            public ProductsController(AppDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<IActionResult> GetAll() =>

                Ok(await _context.Products.Where(p => !p.IsDeleted).ToListAsync());

            [HttpGet("{id}")]
            public async Task<IActionResult> GetById(int id)
            {
                var product = await _context.Products.FindAsync(id);
                return product == null ? NotFound() : Ok(product);
            }

            [HttpPost]
            public async Task<IActionResult> Create(Product product)
            {
                _context.Products.Add(product);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetById), new { id = product.Id }, product);
            }

            [HttpPut("{id}")]
            public async Task<IActionResult> Update(int id, Product updated)
            {
                var product = await _context.Products.FindAsync(id);
                if (product == null) return NotFound();

                product.Name = updated.Name;
                product.Description = updated.Description;
                product.Quantity = updated.Quantity;

                await _context.SaveChangesAsync();
                return Ok();
            }

            [HttpDelete("{id}")]
            public async Task<IActionResult> Delete(int id)
            {
                var product = await _context.Products.FindAsync(id);
                if (product == null) return NotFound();

                product.IsDeleted = true;
                await _context.SaveChangesAsync();
                return NoContent();
            }
        }
    

}
