const express = require('express')

const {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  getTask,
} = require('../controllers/Tasks')

const router = express.Router()

router.route('/').get(getAllTasks).post(createTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)

module.exports = router
