namespace WebApplication1.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int QuantityPurchased { get; set; }
        public DateTime Date { get; set; } = DateTime.Now;

        public Product? Product { get; set; }
    }

}
