using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Aurelia_Tasks.Models
{
    public class TaskItem
    {
        public int TaskItemId { get; set; }
        public string Description { get; set; }
        public DateTime DueDate { get; set; }

        public ICollection<TaskNote> TaskNotes { get; set; }
    }

    public class TaskNote
    {
        public int TaskNoteId { get; set; }
        public string Note { get; set; }
        public DateTime DateEntered { get; set; }

    }
}
