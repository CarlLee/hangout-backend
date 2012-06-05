exports.index = function(req, res){
      res.send('event index');
};

exports.new = function(req, res){
      res.send('new event');
};

exports.create = function(req, res){
      res.send('create event');
};

exports.show = function(req, res){
      res.send('show event ' + req.params.event);
};

exports.edit = function(req, res){
      res.send('edit event ' + req.params.event);
};

exports.update = function(req, res){
      res.send('update event ' + req.params.event);
};

exports.destroy = function(req, res){
      res.send('destroy event ' + req.params.event);
};
