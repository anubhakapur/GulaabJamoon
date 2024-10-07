const bookingModel = require("../models/bookingModel");
const crypto = require('crypto');

const verifyPaymentController = async (req, res) => {
   const { txnid, status, amount, productinfo, firstname, email, hash, key } = req.body;

  // Verify the hash to ensure the callback is from PayU
  const calculateHash = crypto.createHash('sha512')
    .update(`${key}|${txnid}|${amount}|${productinfo}|${firstname}|${email}|||||||||||${process.env.MERCHANT_SALT}`)
    .digest('hex');

  if (calculateHash !== hash) {
    return res.status(400).send('Invalid hash');
  }

  try {
    // Find the booking by txnid (you might need to store txnid when creating the booking)
    const booking = await bookingModel.findOne({ paymentTxnId: txnid });

    if (!booking) {
      return res.status(404).send('Booking not found');
    }

    // Update the booking status based on the payment status
    booking.paymentStatus = status === 'success' ? 'completed' : 'failed';
    await booking.save();

    // You can add more logic here, such as sending email notifications

    // Respond to PayU
    res.send('OK');

    // Redirect user (if this is a browser request, not typically used for PayU callbacks)
    // res.redirect(`${process.env.FRONTEND_URL}/payment-${status}`);
  } catch (error) {
    console.error('Error processing payment callback:', error);
    res.status(500).send('Error processing payment');
  }
};

module.exports = verifyPaymentController;