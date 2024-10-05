const crypto = require('crypto');


const createPaymentController =  async (req, res) => {
  try {
    const { bookingId,amount,tripName,name,email } = req.body;

    console.log("req-create-payment",req.body);

    if (!bookingId || !amount || !tripName || !name || !email) {
      return res.status(400).json({
        message: 'Missing required fields',
        success: false,
        error: true
      });
    }

    const txnid = crypto.randomBytes(12).toString("hex");

    const hashString = `${process.env.MERCHANT_KEY}|${txnid}|${amount}|${tripName}|${name}|${email}|||||||||||${process.env.MERCHANT_SALT}`;
    const hash = crypto.createHash('sha512').update(hashString).digest('hex');
    
    res.json({ 
        key : process.env.MERCHANT_KEY,
        txnid,
        hash,
        amount,
        productinfo: tripName,
        firstname: name,
        // phone: '9999999999',
        surl: `${process.env.BACKEND_URL}/api/verify-payments`, // Update this
        // furl: `${process.env.BACKEND_URL}/api/payment-callback`, // Update this
        email: email,
        success: true,
        error: false,
    });

  } catch (error) {
    res.status(500).json({ 
        message: 'Payment creation failed',
        success: false,
        error: true
    });
  }
};

module.exports = createPaymentController;