﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Jaz15.WebApi;

namespace Jaz15.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class GuestsController : ApiController
    {
        private PartyEntities db = new PartyEntities();

        // GET: api/Guests
        public IQueryable<Guest> GetGuests()
        {
            return db.Guests;
        }

        // GET: api/Guests/5
        [HttpGet]
        [ResponseType(typeof(Guest))]
        public async Task<IHttpActionResult> GetGuest(int id)
        {
            Guest guest = await db.Guests.Where(x => x.Id == id).FirstAsync();
            if (guest == null)
            {
                return NotFound();
            }

            return Ok(guest);
        }

        // GET: api/Guests/5
        [HttpGet]
        [Route("api/GuestsUID/{uid}")]
        [ResponseType(typeof(Guest))]
        public async Task<IHttpActionResult> GetGuestByUID(System.Guid uid)
        {
            Guest guest = await db.Guests.FindAsync(uid);
            if (guest == null)
            {
                return NotFound();
            }

            return Ok(guest);
        }

        // PUT: api/Guests/5
        [HttpPut]
        [Route("api/Guests/{uid}")]
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutGuest(System.Guid uid, Guest guest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (uid != guest.UID)
            {
                return BadRequest();
            }

            db.Entry(guest).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GuestExists(uid))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Guests
        [HttpPost]
        [ResponseType(typeof(Guest))]
        public async Task<IHttpActionResult> PostGuest(Guest guest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Guests.Add(guest);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = guest.Id }, guest);
        }

        // DELETE: api/Guests/5
        [ResponseType(typeof(Guest))]
        public async Task<IHttpActionResult> DeleteGuest(int id)
        {
            Guest guest = await db.Guests.FindAsync(id);
            if (guest == null)
            {
                return NotFound();
            }

            db.Guests.Remove(guest);
            await db.SaveChangesAsync();

            return Ok(guest);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool GuestExists(System.Guid uid)
        {
            return db.Guests.Count(e => e.UID == uid) > 0;
        }
    }
}