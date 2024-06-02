const db = require('../config/db');

class Task {
    constructor(task) {
        this.title = task.title;
        this.description = task.description;
        this.status = task.status;
    }

    static getAll(result) {
        db.query('SELECT * FROM tasks', (err, res) => {
            if (err) {
                console.log('Error fetching tasks:', err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }

    static create(newTask, result) {
        db.query('INSERT INTO tasks SET ?', newTask, (err, res) => {
            if (err) {
                console.log('Error creating task:', err);
                result(err, null);
                return;
            }
            result(null, res.insertId);
        });
    }

    static update(id, updatedTask, result) {
        db.query('UPDATE tasks SET ? WHERE id = ?', [updatedTask, id], (err, res) => {
            if (err) {
                console.log('Error updating task:', err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }

    static delete(id, result) {
        db.query('DELETE FROM tasks WHERE id = ?', id, (err, res) => {
            if (err) {
                console.log('Error deleting task:', err);
                result(err, null);
                return;
            }
            result(null, res);
        });
    }
}

module.exports = Task;
