from django.db import models
class Report(models.Model):
    name = models.CharField(max_length=70)
    date = models.DateField()
    url = models.URLField()

    def __str__(self):
        return f'{self.name} : {self.url}'
    class Meta:
        verbose_name = 'Report'
        verbose_name_plural = 'Reports'