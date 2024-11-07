const verifyToken = (req, res, next) => {
    // Verifica el token y autentica la solicitud
  };
  
  router.get('/rooms', verifyToken, (req, res) => {
    // Obtener la lista de salones disponibles
  });  