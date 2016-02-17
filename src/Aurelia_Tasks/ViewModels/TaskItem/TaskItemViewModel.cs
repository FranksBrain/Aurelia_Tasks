using Aurelia_Tasks.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Aurelia_Tasks.ViewModels
{
    public class TaskItemViewModel
    {
        public int TaskItemId { get; set; }

        [Required]
        [StringLength(255, MinimumLength = 5)]
        public string Description { get; set; }

        [Required]
        public DateTime DueDate { get; set; }

        public IEnumerable<TaskNote> TaskNotes { get; set; }
    }
}
