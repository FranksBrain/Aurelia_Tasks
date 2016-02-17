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
        bool SaveAll();
        TaskItem GetTaskItemById(int id);
    }
}
