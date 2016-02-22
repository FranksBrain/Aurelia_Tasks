using Microsoft.AspNet.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aurelia_Tasks.Models
{
    public interface ITaskRepository
    {
        IEnumerable<TaskItem> GetAllTaskItems();
        void AddTaskItem(TaskItem newTaskItem);
        ObjectResult UpdateTaskItem(TaskItem updatedTaskItem);
        bool SaveAll();
        TaskItem GetTaskItemById(int id);
    }
}
