const user = {
  saveData: (req, res) => {
    res.json({
      message: "Enviaste a el endpoint '/savedata' el siguiente dato: " + req.body.data,
    });
  },
  demo: (req, res) => {
    res.json({ message: "Conexión con backend exitosa" });
  },
};

module.exports = user;
