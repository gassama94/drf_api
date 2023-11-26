from rest_framework import permissions

# Connect custom permission to necessary view.
class IsOwnerOrReadOnly(permissions.BasePermission):
  def has_object_permission(self, request, view, obj):
     # Read only.
    if request.method in permissions.SAFE_METHODS:
      return True
    return obj.owner == request.user