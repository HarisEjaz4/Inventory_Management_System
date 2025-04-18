using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using WebApplication1.Models;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Product> Products => Set<Product>();
    public DbSet<Sale> Sales => Set<Sale>();
    public DbSet<Purchase> Purchases => Set<Purchase>();
}
