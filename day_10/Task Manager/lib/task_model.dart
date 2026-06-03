class StudentTask {
  String title;
  String subtitle;
  bool isCompleted;

  StudentTask({
    required this.title,
    required this.subtitle,
    this.isCompleted = false,
  });
}