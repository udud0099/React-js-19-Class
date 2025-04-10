from django.conf import settings
from rest_framework import fields
from rest_framework.relations import PrimaryKeyRelatedField
from rest_framework.serializers import ListSerializer, ModelSerializer


class CustomModelSerializer(ModelSerializer):
    def to_representation(self, instance):
        res = super().to_representation(instance)

        if settings.ALLOW_NULL_VALUES_IN_RESPONSE:
            return res

        # TODO: add more keys and values
        default_values = {
            # String Fields
            fields.CharField: "",
            fields.EmailField: "",
            fields.RegexField: "",
            fields.SlugField: "",
            fields.URLField: "",
            fields.UUIDField: "",
            fields.FilePathField: "",
            fields.IPAddressField: "",
            # fields.JSONField: None,
            # Boolaen Fields
            fields.BooleanField: False,
            # Numeric Fields
            fields.IntegerField: 0,
            fields.FloatField: 0.0,
            fields.DecimalField: 0.0,
            # Date and Time fields
            fields.DateTimeField: "",
            fields.DateField: "",
            fields.TimeField: "",
            fields.DurationField: "",
            # Choice Selection fields
            fields.ChoiceField: "",
            fields.MultipleChoiceField: [],
            # File upload fields
            fields.ImageField: "",
            fields.FileField: "",
            # Miscellaneous Fields
            # fields.ReadOnlyField: "",
            fields.HiddenField: "",
            fields.ModelField: "",
            fields.SerializerMethodField: "",
            ListSerializer: [],
            PrimaryKeyRelatedField: None,
        }

        for key in res.keys():
            if (
                not res[key]
                and not res[key] == ""
                and not res[key] == 0
                and not res[key] == False
                and not res[key] == []
                and not res[key] == {}
            ):
                try:
                    data_type = type(self.fields[key])
                    res[key] = default_values[data_type]
                except KeyError:
                    res[key] = ""
        return res
