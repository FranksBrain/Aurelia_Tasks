using Aurelia_Tasks.Models;
using Aurelia_Tasks.ViewModels;
using AutoMapper;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aurelia_Tasks.Controllers.Api
{
    [Authorize]
    [Route("api/taskItems")]
    public class TaskItemController : Controller
    {
        private ILogger<TaskItemController> _logger;
        private ITaskRepository _repo;

        public TaskItemController(ITaskRepository repository, ILogger<TaskItemController> logger)
        {
            _repo = repository;
            _logger = logger;
        }

        [HttpGet("")]
        //public JsonResult Get()
        public IEnumerable<TaskItem> Get()
        {
            var taskItems = _repo.GetAllTaskItems();
            //var results = Mapper.Map<IEnumerable<TaskItemViewModel>>(taskItems);
            return taskItems;
            //return Json(results);

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var taskItem = _repo.GetTaskItemById(id);
            return new ObjectResult(taskItem);
        }

        [HttpPut]
        public IActionResult Put([FromBody] TaskItem updatedTaskItem)
        {
            if (ModelState.IsValid)
            {
                return _repo.UpdateTaskItem(updatedTaskItem);
            }
            return HttpBadRequest(ModelState);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TaskItem newTaskItem)
        {
            if (ModelState.IsValid)
            {
                _repo.AddTaskItem(newTaskItem);
                var x = CreatedAtRoute(new { controller = "TaskItem", id = newTaskItem.TaskItemId }, newTaskItem);
                return x;
                //return CreatedAtRoute(new { controller = "TaskItems", id = newTaskItem.TaskItemId }, newTaskItem);
            }
            return HttpBadRequest(ModelState);
        }
    }
}
