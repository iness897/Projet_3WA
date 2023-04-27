const {Router} = require("express")
const { getAllTask, getOneTask,createTask, updateTask, removeTask } = require("../controllers/TaskController")


const router = Router()

router.get('/', getAllTask)
router.get('/:id', getOneTask)
router.post('/', createTask)
router.put('/:id', updateTask)
router.delete('/:id', removeTask)

module.exports = router;