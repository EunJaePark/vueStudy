// libs
import { Router } from 'express'; // modules

import PostModel from '../models/PostModel.js'; // router init

const router = Router();
router.post('/', async (req, res) => {
  try {
    const doc = await PostModel.create({ ...req.body,
      createdBy: req.user._id
    });
    res.status(201).json({
      data: doc
    });
  } catch (error) {
    console.log(error);

    if (error.code === 11000) {
      return res.status(400).send({
        message: 'Duplicated Data',
        error
      });
    }

    res.status(400).send({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/', async (req, res) => {
  try {
    const docs = await PostModel.find({
      createdBy: req.user._id
    }).lean().exec();
    res.status(200).json({
      posts: docs
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.get('/:id', async (req, res) => {
  try {
    const doc = await PostModel.findOne({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!doc) {
      return res.status(400).json({
        message: 'The data is not found'
      });
    }

    res.status(200).json({ ...doc
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const updatedDoc = await PostModel.findOneAndUpdate({
      createdBy: req.user._id,
      _id: req.params.id
    }, req.body, {
      new: true
    }).lean().exec();

    if (!updatedDoc) {
      return res.status(400).json({
        message: 'cannot update the data'
      });
    }

    res.status(200).json({ ...updatedDoc
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({
      message: 'sth wrong',
      error
    });
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const removed = await PostModel.findOneAndRemove({
      createdBy: req.user._id,
      _id: req.params.id
    }).lean().exec();

    if (!removed) {
      return res.status(400).json({
        message: 'cannot remove the data'
      });
    }

    return res.status(200).json({ ...removed
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'sth wrong',
      error
    });
  }
});
export default router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hcGkvcG9zdHMuanMiXSwibmFtZXMiOlsiUm91dGVyIiwiUG9zdE1vZGVsIiwicm91dGVyIiwicG9zdCIsInJlcSIsInJlcyIsImRvYyIsImNyZWF0ZSIsImJvZHkiLCJjcmVhdGVkQnkiLCJ1c2VyIiwiX2lkIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwic2VuZCIsIm1lc3NhZ2UiLCJnZXQiLCJkb2NzIiwiZmluZCIsImxlYW4iLCJleGVjIiwicG9zdHMiLCJmaW5kT25lIiwicGFyYW1zIiwiaWQiLCJwdXQiLCJ1cGRhdGVkRG9jIiwiZmluZE9uZUFuZFVwZGF0ZSIsIm5ldyIsImRlbGV0ZSIsInJlbW92ZWQiLCJmaW5kT25lQW5kUmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFNBQVNBLE1BQVQsUUFBdUIsU0FBdkIsQyxDQUNBOztBQUNBLE9BQU9DLFNBQVAsTUFBc0Isd0JBQXRCLEMsQ0FFQTs7QUFDQSxNQUFNQyxNQUFNLEdBQUdGLE1BQU0sRUFBckI7QUFFQUUsTUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWixFQUFpQixPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDbkMsTUFBSTtBQUNGLFVBQU1DLEdBQUcsR0FBRyxNQUFNTCxTQUFTLENBQUNNLE1BQVYsQ0FBaUIsRUFDakMsR0FBR0gsR0FBRyxDQUFDSSxJQUQwQjtBQUVqQ0MsTUFBQUEsU0FBUyxFQUFFTCxHQUFHLENBQUNNLElBQUosQ0FBU0M7QUFGYSxLQUFqQixDQUFsQjtBQUlBTixJQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxNQUFBQSxJQUFJLEVBQUVSO0FBQVIsS0FBckI7QUFDRCxHQU5ELENBTUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaOztBQUNBLFFBQUlBLEtBQUssQ0FBQ0cs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QixLQUFQLEVBQWM7QUFDZEMsSUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDQVYsSUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRU8sTUFBQUEsT0FBTyxFQUFFLFdBQVg7QUFBd0JMLE1BQUFBO0FBQXhCLEtBQXJCO0FBQ0Q7QUFDRixDQWxCRDtBQW9CQSxlQUFlYixNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbGlic1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnZXhwcmVzcyc7XG4vLyBtb2R1bGVzXG5pbXBvcnQgUG9zdE1vZGVsIGZyb20gJy4uL21vZGVscy9Qb3N0TW9kZWwuanMnO1xuXG4vLyByb3V0ZXIgaW5pdFxuY29uc3Qgcm91dGVyID0gUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgUG9zdE1vZGVsLmNyZWF0ZSh7XG4gICAgICAuLi5yZXEuYm9keSxcbiAgICAgIGNyZWF0ZWRCeTogcmVxLnVzZXIuX2lkLFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHsgZGF0YTogZG9jIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICBpZiAoZXJyb3IuY29kZSA9PT0gMTEwMDApIHtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZCh7IG1lc3NhZ2U6ICdEdXBsaWNhdGVkIERhdGEnLCBlcnJvciB9KTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cyg0MDApLnNlbmQoeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jcyA9IGF3YWl0IFBvc3RNb2RlbC5maW5kKHtcbiAgICAgIGNyZWF0ZWRCeTogcmVxLnVzZXIuX2lkLFxuICAgIH0pXG4gICAgICAubGVhbigpXG4gICAgICAuZXhlYygpO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgICAgcG9zdHM6IGRvY3MsXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgUG9zdE1vZGVsLmZpbmRPbmUoe1xuICAgICAgY3JlYXRlZEJ5OiByZXEudXNlci5faWQsXG4gICAgICBfaWQ6IHJlcS5wYXJhbXMuaWQsXG4gICAgfSlcbiAgICAgIC5sZWFuKClcbiAgICAgIC5leGVjKCk7XG5cbiAgICBpZiAoIWRvYykge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ1RoZSBkYXRhIGlzIG5vdCBmb3VuZCcgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi5kb2MgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG5yb3V0ZXIucHV0KCcvOmlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXBkYXRlZERvYyA9IGF3YWl0IFBvc3RNb2RlbC5maW5kT25lQW5kVXBkYXRlKFxuICAgICAge1xuICAgICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcbiAgICAgICAgX2lkOiByZXEucGFyYW1zLmlkLFxuICAgICAgfSxcbiAgICAgIHJlcS5ib2R5LFxuICAgICAgeyBuZXc6IHRydWUgfSxcbiAgICApXG4gICAgICAubGVhbigpXG4gICAgICAuZXhlYygpO1xuXG4gICAgaWYgKCF1cGRhdGVkRG9jKSB7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiAnY2Fubm90IHVwZGF0ZSB0aGUgZGF0YScgfSk7XG4gICAgfVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyAuLi51cGRhdGVkRG9jIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ3N0aCB3cm9uZycsIGVycm9yIH0pO1xuICB9XG59KTtcblxucm91dGVyLmRlbGV0ZSgnLzppZCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlbW92ZWQgPSBhd2FpdCBQb3N0TW9kZWwuZmluZE9uZUFuZFJlbW92ZSh7XG4gICAgICBjcmVhdGVkQnk6IHJlcS51c2VyLl9pZCxcbiAgICAgIF9pZDogcmVxLnBhcmFtcy5pZCxcbiAgICB9KVxuICAgICAgLmxlYW4oKVxuICAgICAgLmV4ZWMoKTtcblxuICAgIGlmICghcmVtb3ZlZCkge1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogJ2Nhbm5vdCByZW1vdmUgdGhlIGRhdGEnIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IC4uLnJlbW92ZWQgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnc3RoIHdyb25nJywgZXJyb3IgfSk7XG4gIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=