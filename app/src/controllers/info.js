const getBuildInfo = async (req, res) => {
  return res.status(200).send({
//    'BuildVersion': process.env.BUILD_VERSION,
    'BuildTime': process.env.BUILD_TIME,
  });
};

module.exports = {
  getBuildInfo,
};
