from django.shortcuts import render
from .models import Post


def hello_world(request):
    return render(request, "posts/hello_world.html")


def posts_list(request, *args, **kwargs):

    posts = Post.objects.all()
    print(posts)

    return render(request, "posts/posts_list.html", {"posts": posts})
    # context는 dictionary 형식으로 이루어져 있음 => {"posts": posts}


# 한 게시글 읽는 R
def posts_read(request, pk, *args, **kwargs):
    # # Tuple
    # print(args)
    # # Dictionary
    # print(kwargs)

    post = Post.objects.get(id=pk)
    print(post)

    return render(request, "posts/posts_read.html", {"post": post})
