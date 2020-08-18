from django.db import models

class Post(models.Model):
	title = models.CharField(max_length=200)
	summary = models.TextField(null=True, default='')
	content = models.TextField()

	def __str__(self):
		"""A string representation of the model."""
		return self.title
