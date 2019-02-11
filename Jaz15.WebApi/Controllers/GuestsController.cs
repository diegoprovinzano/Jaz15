using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Jaz15.WebApi;
using QRCoder;

namespace Jaz15.WebApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class GuestsController : ApiController
    {
        private PartyEntities db = new PartyEntities();

        // GET: api/Guests
        [HttpGet]
        [Route("api/Guests")]
        [ResponseType(typeof(Guest))]
        public async Task<IHttpActionResult> GetGuests()
        {
            return Ok(await db.Guests.ToListAsync());
        }

        // GET: api/Guests/5
        [HttpGet]
        [Route("api/Guests/{id}")]
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

        // GET: api/Guests/5
        [HttpGet]
        [Route("api/GuestsQR/{uid}")]
        public async Task<IHttpActionResult> GetGuestQRByUID(System.Guid uid)
        {
            Guest guest = await db.Guests.FindAsync(uid);
            if (guest == null)
            {
                return null;
            }

            QRCodeGenerator qrGenerator = new QRCodeGenerator();
            QRCodeData qrCodeData = qrGenerator.CreateQrCode("https://jaz15.azurewebsites.net/guest/" + uid, QRCodeGenerator.ECCLevel.Q);
            QRCode qrCode = new QRCode(qrCodeData);
            Bitmap qrCodeImage = qrCode.GetGraphic(20, Color.Black, Color.White, (Bitmap)Bitmap.FromFile(@"D:\home\site\wwwroot\jaz15.png"));

            Bitmap bImage = qrCodeImage;
            System.IO.MemoryStream ms = new MemoryStream();
            bImage.Save(ms, ImageFormat.Jpeg);
            byte[] byteImage = ms.ToArray();
            var SigBase64 = Convert.ToBase64String(byteImage);

            return Ok(SigBase64);
            // return Ok(qrCodeImage.ToString());
        }

        // GET: api/Guests/5
        [HttpGet]
        [Route("api/GuestsQR/create")]
        public async Task<IHttpActionResult> GetGuestQRCreate()
        {
            Guest[] guest = await db.Guests.ToArrayAsync();
            if (guest == null)
            {
                return null;
            }

            foreach (var g in guest)
            {
                QRCodeGenerator qrGenerator = new QRCodeGenerator();
                QRCodeData qrCodeData = qrGenerator.CreateQrCode("https://jaz15.azurewebsites.net/guest/" + g.UID, QRCodeGenerator.ECCLevel.Q);
                QRCode qrCode = new QRCode(qrCodeData);
                Bitmap qrCodeImage = qrCode.GetGraphic(20, Color.Black, Color.White, (Bitmap)Bitmap.FromFile(@"D:\home\site\wwwroot\jaz15.png"), 25, 1);

                Bitmap bImage = qrCodeImage;
                bImage.Save(@"C:\Users\diego\source\repos\Jaz15\Jaz15\ClientApp\src\assets\" + g.TableId.ToString() + "-" + g.FirstName + "-" + g.LastName + ".jpg", ImageFormat.Jpeg);
            }
            return Ok();
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