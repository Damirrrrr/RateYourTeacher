from django.db import models

class University(models.Model):

    name = models.CharField(max_length=70)
    img = models.ImageField()
    description = models.TextField(max_length=250)
    url = models.URLField()

    class Meta:
        verbose_name = 'University'
        verbose_name_plural = 'Universities'
    def __str__(self):
        return f'{self.id}: {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image': self.img,
            'url': self.url,
        }

class Teacher(models.Model):
    fullname = models.CharField(max_length=70)
    university = models.ForeignKey(University, on_delete=models.CASCADE, related_name='teacher')
    img = models.ImageField()
    rating = models.FloatField(default=0.0)
    description = models.TextField(max_length=250)
    url = models.URLField()

    def __str__(self):
        return f'{self.id}: {self.fullname}'
    def to_json(self):
        return {
            'id': self.id,
            'fullname': self.fullname,
            'description': self.description,
            'rating': self.rating,
            'image': self.img,
            'url': self.url,
        }