import 'package:flutter/material.dart';
import 'main.dart'; // Access themeNotifier
import 'task_model.dart';
import 'add_task_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  // Default Task added as requested
  final List<StudentTask> _tasks = [
    StudentTask(
      title: "DAY -10",
      subtitle: "make an app with multiple pages using flutter",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Student Planner'),
        actions: [
          // FIX: Wrap the switch so it updates its state effectively
          ValueListenableBuilder<ThemeMode>(
            valueListenable: themeNotifier,
            builder: (context, currentMode, child) {
              return Row(
                children: [
                  Icon(currentMode == ThemeMode.dark ? Icons.dark_mode : Icons.light_mode),
                  Switch(
                    value: currentMode == ThemeMode.dark,
                    onChanged: (isDark) {
                      themeNotifier.value = isDark ? ThemeMode.dark : ThemeMode.light;
                    },
                  ),
                ],
              );
            },
          ),
          const SizedBox(width: 10),
        ],
      ),
      body: ListView.builder(
        itemCount: _tasks.length,
        itemBuilder: (context, index) {
          final task = _tasks[index];
          return Card(
            margin: const EdgeInsets.symmetric(horizontal: 15, vertical: 8),
            child: ListTile(
              leading: Checkbox(
                value: task.isCompleted,
                onChanged: (val) => setState(() => task.isCompleted = val!),
              ),
              title: Text(
                task.title,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  decoration: task.isCompleted ? TextDecoration.lineThrough : null,
                ),
              ),
              subtitle: Text(task.subtitle),
              trailing: IconButton(
                icon: const Icon(Icons.delete, color: Colors.redAccent),
                onPressed: () => setState(() => _tasks.removeAt(index)),
              ),
            ),
          );
        },
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async {
          final newTask = await Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => const AddTaskScreen()),
          );
          if (newTask != null) {
            setState(() => _tasks.add(newTask));
          }
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}