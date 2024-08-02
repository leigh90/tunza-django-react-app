from rest_framework import serializers
from users.models import User

from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    id = serializers.UUIDField(source='public_id', read_only=True, format='hex')
    created = serializers.DateTimeField(read_only=True)
    updated = serializers.DateTimeField(read_only=True)

    def create(self, validated_data):
        return User.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        """
        """
        instance.username = validated_data.get("username", instance.username)
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)


    class Meta:
        model = User
        # List of all the fields that can be included in a request or a response
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'is_active', 'created', 'updated']
        # List of all the fields that can only be read by the user
        read_only_field = ['is_active']


    # def get_queryset(self):
    #     if self.request.user.is_superuser:
    #         return User.objects.all()
    #     return User.objects.exclude(is_superuser=True)

    # def get_object(self):
    #     obj = User.objects.get_object_by_public_id(self.kwargs['pk'])

    #     self.check_object_permissions(self.request, obj)

    #     return obj




class RegisterSerializer(UserSerializer):
    """
    Registration serializer for requests and user creation
    """

    # Making sure the password is at least 8 characters long, and no longer than 128 and can't be read
    # by the user
    password = serializers.CharField(max_length=128, min_length=8, write_only=True, required=True)

    class Meta:
        model = User
        # List of all the fields that can be included in a request or a response
        fields = ['id', 'email', 'username', 'first_name', 'last_name', 'password']

    def create(self, validated_data):
        # Use the `create_user` method we wrote earlier for the UserManager to create a new user.
        return User.objects.create_user(**validated_data)




        

