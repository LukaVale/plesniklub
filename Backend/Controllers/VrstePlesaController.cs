﻿using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class VrstePlesaController : ControllerBase
    {

        // koristimo dependency injection
        // 1. definiramo privatno svojstvo
        private readonly VrstePlesaContext _context;

        // koristimo dependency injection
        // 2. proslijediš instancu kroz konstruktor
        public VrstePlesaController(VrstePlesaContext context)
        {
            _context = context;
        }


        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.VrstePlesa);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }

        [HttpGet]
        [Route("{sifra:int}")]
        public IActionResult GetBySifra(int sifra) {
            try
            {
                var s = _context.VrstePlesa.Find(sifra);
                if (s == null)
                {
                    return NotFound();
                }
                return Ok(s);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpPost]
        public IActionResult Post(VrstePlesa smjer)
        {
            try
            {
                _context.VrstePlesa.Add(smjer);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, smjer);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpPut]
        [Route("{sifra:int}")]
        [Produces("application/json")]
        public IActionResult Put(int sifra, VrstePlesa naziv)
        {
            try
            {

                var s = _context.VrstePlesa.Find(sifra);

                if (s == null)
                {
                    return NotFound();
                }

                s.Naziv = naziv.Naziv;

                _context.VrstePlesa.Update(s);
                _context.SaveChanges();
                return Ok(new { poruka= "Uspješno promijenjeno" });
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpDelete]
        [Route("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            try
            {
                var s = _context.VrstePlesa.Find(sifra);
                if (s == null)
                {
                    return NotFound();
                }
                _context.VrstePlesa.Remove(s);
                _context.SaveChanges();
                return Ok(new { poruka = "Uspješno obrisano" });
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }




    }
}
