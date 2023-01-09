const handler = (req, res) => {
  if (req.methode === 'POST') {
    const data = req.body;
    const { title, image, address, description } = data;

    // fetch data here
  }
};

export default handler;
