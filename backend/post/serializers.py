from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
	class Meta:
		fields = (
				'id',
				'title',
				'summary',
				'content',
				)
		model = Post
