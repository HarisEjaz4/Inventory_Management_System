namespace WebApplication1.Models
{
    public class Sale
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int QuantitySold { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;

        public Product? Product { get; set; }
    }

}
