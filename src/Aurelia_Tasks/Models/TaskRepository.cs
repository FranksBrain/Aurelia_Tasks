using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Data.Entity;
using Microsoft.AspNet.Mvc;

namespace Aurelia_Tasks.Models
{
    public class TaskRepository : ITaskRepository
    {
        private ApplicationDbContext _context;
        private ILogger<TaskRepository> _logger;

        public TaskRepository(ApplicationDbContext context, ILogger<TaskRepository> logger)
        {
            _context = context;
            _logger = logger;
        }

        public void AddTaskItem(TaskItem newTaskItem)
        {
            _context.TaskItems.Add(newTaskItem);
            _context.SaveChanges();
        }

        public IEnumerable<TaskItem> GetAllTaskItems()
        {
            try
            {
                return _context.TaskItems
                    .Include(x => x.TaskNotes)
                    .ToList();
            }
            catch(Exception ex)
            {
                _logger.LogError("Could not get all tasks", ex);
                return null;
            }
        }

        public TaskItem GetTaskItemById(int id)
        {
            try
            {
                return _context.TaskItems.First(x => x.TaskItemId == id);
            }
            catch (Exception ex)
            {
                _logger.LogError("Could not get task item", ex);
                return null;
            }
        }

        public bool SaveAll()
        {
            return _context.SaveChanges() > 0;
        }

        public ObjectResult UpdateTaskItem(TaskItem updatedTaskItem)
        {
            _context.TaskItems.Attach(updatedTaskItem).State = EntityState.Modified;
            _context.SaveChanges();
            return new ObjectResult(updatedTaskItem);
        }
    }
}
