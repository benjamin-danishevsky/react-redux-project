const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const notesRouter = require('./notes.js');
const notebookRouter = require('./notebooks.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use(notesRouter);

router.use(notebookRouter);

// router.post('/test', (req, res) => {
//   res.json({ requestBody: req.body });
// });

module.exports = router;
