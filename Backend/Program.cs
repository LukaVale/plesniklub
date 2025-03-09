using Backend.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen();

// Dodaj CORS pravila
builder.Services.AddCors(o => {
    o.AddPolicy("CorsPolicy", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Povezivanje baze podataka
builder.Services.AddDbContext<VrstePlesaContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("VrstePlesaContext"));
});

var app = builder.Build();

// KORAK 1: Prvo dodaj CORS!
app.UseCors("CorsPolicy");

// HTTPS redirekcija
app.UseHttpsRedirection();

// KORAK 2: Swagger mora biti prije mapiranja kontrolera
app.UseSwagger();
app.UseSwaggerUI(o => {
    o.EnableTryItOutByDefault();
    o.ConfigObject.AdditionalItems.Add("requestSnippetsEnabled", true);
});

// Autorizacija (ako ti uopæe treba)
app.UseAuthorization();

// KORAK 3: Mape kontrolera dolaze nakon CORS-a i Swaggera
app.MapControllers();

// Produkcija
app.UseStaticFiles();
app.UseDefaultFiles();
app.MapFallbackToFile("index.html");

app.Run();
