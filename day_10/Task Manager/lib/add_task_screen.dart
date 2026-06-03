import 'package:flutter/material.dart';
import 'task_model.dart';

class AddTaskScreen extends StatefulWidget {
  const AddTaskScreen({super.key});

  @override
  State<AddTaskScreen> createState() => _AddTaskScreenState();
}

class _AddTaskScreenState extends State<AddTaskScreen> {
  final _titleController = TextEditingController();
  final _descController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Add Assignment')),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
          children: [
            TextField(
              controller: _titleController,
              decoration: const InputDecoration(labelText: 'Task Title', border: OutlineInputBorder()),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _descController,
              decoration: const InputDecoration(labelText: 'Description', border: OutlineInputBorder()),
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              style: ElevatedButton.styleFrom(minimumSize: const Size(double.infinity, 50)),
              onPressed: () {
                if (_titleController.text.isNotEmpty) {
                  Navigator.pop(
                    context,
                    StudentTask(title: _titleController.text, subtitle: _descController.text),
                  );
                }
              },
              child: const Text('Save Task'),
            ),
          ],
        ),
      ),
    );
  }
}