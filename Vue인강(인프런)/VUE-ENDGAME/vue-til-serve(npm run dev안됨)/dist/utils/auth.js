// json related
import jwt from 'jsonwebtoken';
import { SECRET_KEY, EXPIRATION_DATE } from '../config'; // modules

import UserModel from '../models/UserModel.js';
export const newToken = user => {
  const payload = {
    username: user.username,
    _id: user._id
  };
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: EXPIRATION_DATE
  });
};
export const verifyToken = token => new Promise((resolve, reject) => {
  jwt.verify(token, SECRET_KEY, (err, payload) => {
    if (err) return reject(err);
    resolve(payload);
  });
}); // middleware

export const authenticateUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: 'token must be included'
    });
  }

  const token = req.headers.authorization;
  let payload;

  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).json({
      message: 'token is invalid'
    });
  }

  const user = await UserModel.findById(payload._id).select('-password').lean().exec();

  if (!user) {
    return res.status(401).json({
      message: 'user is not found'
    });
  }

  req.user = user;
  next();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hdXRoLmpzIl0sIm5hbWVzIjpbImp3dCIsIlNFQ1JFVF9LRVkiLCJFWFBJUkFUSU9OX0RBVEUiLCJVc2VyTW9kZWwiLCJuZXdUb2tlbiIsInVzZXIiLCJwYXlsb2FkIiwidXNlcm5hbWUiLCJfaWQiLCJzaWduIiwiZXhwaXJlc0luIiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidmVyaWZ5IiwiZXJyIiwiYXV0aGVudGljYXRlVXNlciIsInJlcSIsInJlcyIsIm5leHQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZSIsImZpbmRCeUlkIiwic2VsZWN0IiwibGVhbiIsImV4ZWMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsT0FBT0EsR0FBUCxNQUFnQixjQUFoQjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLGVBQXJCLFFBQTRDLFdBQTVDLEMsQ0FDQTs7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLHdCQUF0QjtBQUVBLE9BQU8sTUFBTUMsUUFBUSxHQUFHQyxJQUFJLElBQUk7QUFDOUIsUUFBTUMsT0FBTyxHQUFHO0FBQ2RDLElBQUFBLFFBQVEsRUFBRUYsSUFBSSxDQUFDRSxRQUREO0FBRWRDLElBQUFBLEdBQUcsRUFBRUgsSUFBSSxDQUFDRztBQUZJLEdBQWhCO0FBSUEsU0FBT1IsR0FBRyxDQUFDUyxJQUFKLENBQVNILE9BQVQsRUFBa0JMLFVBQWxCLEVBQThCO0FBQ25DUyxJQUFBQSxTQUFTLEVBQUVSO0FBRHdCLEdBQTlCLENBQVA7QUFHRCxDQVJNO0FBVVAsT0FBTyxNQUFNUyxXQUFXLEdBQUdDLEtBQUssSUFDOUIsSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUMvQmYsRUFBQUEsR0FBRyxDQUFDZ0IsTUFBSixDQUFXSixLQUFYLEVBQWtCWCxVQUFsQixFQUE4QixDQUFDZ0IsR0FBRCxFQUFNWCxPQUFOLEtBQWtCO0FBQzlDLFFBQUlXLEdBQUosRUFBUyxPQUFPRixNQUFNLENBQUNFLEdBQUQsQ0FBYjtBQUNUSCxJQUFBQSxPQUFPLENBQUNSLE9BQUQsQ0FBUDtBQUNELEdBSEQ7QUFJRCxDQUxELENBREssQyxDQVFQOztBQUNBLE9BQU8sTUFBTVksZ0JBQWdCLEdBQUcsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixLQUEwQjtBQUN4RCxNQUFJLENBQUNGLEdBQUcsQ0FBQ0csT0FBSixDQUFZQyxhQUFqQixFQUFnQztBQUM5QixXQUFPSCxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBRUQsUUFBTWQsS0FBSyxHQUFHTyxHQUFHLENBQUNHLE9BQUosQ0FBWUMsYUFBMUI7QUFDQSxNQUFJakIsT0FBSjs7QUFDQSxNQUFJO0FBQ0ZBLElBQUFBLE9BQU8sR0FBRyxNQUFNSyxXQUFXLENBQUNDLEtBQUQsQ0FBM0I7QUFDRCxHQUZELENBRUUsT0FBT2UsQ0FBUCxFQUFVO0FBQ1YsV0FBT1AsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVELFFBQU1yQixJQUFJLEdBQUcsTUFBTUYsU0FBUyxDQUFDeUIsUUFBVixDQUFtQnRCLE9BQU8sQ0FBQ0UsR0FBM0IsRUFDaEJxQixNQURnQixDQUNULFdBRFMsRUFFaEJDLElBRmdCLEdBR2hCQyxJQUhnQixFQUFuQjs7QUFLQSxNQUFJLENBQUMxQixJQUFMLEVBQVc7QUFDVCxXQUFPZSxHQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQixDQUFQO0FBQ0Q7O0FBRURQLEVBQUFBLEdBQUcsQ0FBQ2QsSUFBSixHQUFXQSxJQUFYO0FBQ0FnQixFQUFBQSxJQUFJO0FBQ0wsQ0F4Qk0iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBqc29uIHJlbGF0ZWRcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCB7IFNFQ1JFVF9LRVksIEVYUElSQVRJT05fREFURSB9IGZyb20gJy4uL2NvbmZpZyc7XG4vLyBtb2R1bGVzXG5pbXBvcnQgVXNlck1vZGVsIGZyb20gJy4uL21vZGVscy9Vc2VyTW9kZWwuanMnO1xuXG5leHBvcnQgY29uc3QgbmV3VG9rZW4gPSB1c2VyID0+IHtcbiAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICBfaWQ6IHVzZXIuX2lkLFxuICB9O1xuICByZXR1cm4gand0LnNpZ24ocGF5bG9hZCwgU0VDUkVUX0tFWSwge1xuICAgIGV4cGlyZXNJbjogRVhQSVJBVElPTl9EQVRFLFxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCB2ZXJpZnlUb2tlbiA9IHRva2VuID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBTRUNSRVRfS0VZLCAoZXJyLCBwYXlsb2FkKSA9PiB7XG4gICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICByZXNvbHZlKHBheWxvYWQpO1xuICAgIH0pO1xuICB9KTtcblxuLy8gbWlkZGxld2FyZVxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZVVzZXIgPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgaWYgKCFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ3Rva2VuIG11c3QgYmUgaW5jbHVkZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVycy5hdXRob3JpemF0aW9uO1xuICBsZXQgcGF5bG9hZDtcbiAgdHJ5IHtcbiAgICBwYXlsb2FkID0gYXdhaXQgdmVyaWZ5VG9rZW4odG9rZW4pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ3Rva2VuIGlzIGludmFsaWQnIH0pO1xuICB9XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXJNb2RlbC5maW5kQnlJZChwYXlsb2FkLl9pZClcbiAgICAuc2VsZWN0KCctcGFzc3dvcmQnKVxuICAgIC5sZWFuKClcbiAgICAuZXhlYygpO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuanNvbih7IG1lc3NhZ2U6ICd1c2VyIGlzIG5vdCBmb3VuZCcgfSk7XG4gIH1cblxuICByZXEudXNlciA9IHVzZXI7XG4gIG5leHQoKTtcbn07XG4iXX0=