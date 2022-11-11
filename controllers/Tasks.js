const getAllTasks = (req, res) => {
  res.send('get the task')
}

const getTask = (req, res) => {
  res.send('get the task')
}

const createTasks = (req, res) => {
  res.json(req.body)
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
