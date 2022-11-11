const Task = require('../modals/Tasks')

const getAllTasks = (req, res) => {
  res.send('get the task')
}

const getTask = (req, res) => {
  res.send('get the task')
}

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({ task })
  } catch (err) {
    res.status(500)
    console.log(err)
  }
}

const updateTasks = (req, res) => {
  res.send('Update the task')
}

const deleteTasks = (req, res) => {
  res.send('Task deleting')
}

module.exports = {
  getAllTasks,
  createTasks,
  updateTasks,
  deleteTasks,
  getTask,
}
