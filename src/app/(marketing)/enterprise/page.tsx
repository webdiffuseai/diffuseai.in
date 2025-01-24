'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { motion } from "framer-motion";
import { ImagePlus, MessageCircle, ThumbsUp, MoreVertical, Edit, Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Post {
    id: number;
    author: string;
    content: string;
    image?: string;
    likes: number;
    comments: Comment[];
    timestamp: Date;
}

interface Comment {
    id: number;
    author: string;
    content: string;
    timestamp: Date;
}

const ForumPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [newPost, setNewPost] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [editingPost, setEditingPost] = useState<number | null>(null);
    const [editContent, setEditContent] = useState("");

    const handleCreatePost = () => {
        if (newPost.trim()) {
            const post: Post = {
                id: Date.now(),
                author: "Current User",
                content: newPost,
                likes: 0,
                comments: [],
                timestamp: new Date(),
            };
            setPosts([post, ...posts]);
            setNewPost("");
            setSelectedImage(null);
        }
    };

    const handleLike = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, likes: post.likes + 1 } : post
        ));
    };

    const handleComment = (postId: number, comment: string) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                const newComment: Comment = {
                    id: Date.now(),
                    author: "Current User",
                    content: comment,
                    timestamp: new Date(),
                };
                return { ...post, comments: [...post.comments, newComment] };
            }
            return post;
        }));
    };

    const handleDeletePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    const handleEditPost = (postId: number) => {
        const post = posts.find(p => p.id === postId);
        if (post) {
            setEditingPost(postId);
            setEditContent(post.content);
        }
    };

    const saveEditedPost = (postId: number) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, content: editContent } : post
        ));
        setEditingPost(null);
        setEditContent("");
    };

    const PostActions = ({ post }: { post: Post }) => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                    className="text-red-600"
                    onClick={() => handleDeletePost(post.id)}
                >
                    <Trash className="h-4 w-4 mr-2" />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl font-bold mb-8">Discussion Forum</h1>

                <Card className="mb-8">
                    <CardHeader>
                        <h2 className="text-xl font-semibold">Start a Discussion</h2>
                    </CardHeader>
                    <CardContent>
                        <Textarea
                            placeholder="What's on your mind?"
                            value={newPost}
                            onChange={(e) => setNewPost(e.target.value)}
                            className="mb-4"
                        />
                        <div className="flex items-center gap-4">
                            <Button variant="outline" onClick={() => document.getElementById('image-upload')?.click()}>
                                <ImagePlus className="w-4 h-4 mr-2" />
                                Add Image
                            </Button>
                            <input
    id="image-upload"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
    title="Upload image"
    aria-label="Upload image"
/>

                            {selectedImage && <span className="text-sm text-muted-foreground">{selectedImage.name}</span>}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleCreatePost}>Post Discussion</Button>
                    </CardFooter>
                </Card>

                <div className="space-y-6">
                    {posts.map((post) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Card>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gray-200" />
                                            <div>
                                                <h3 className="font-semibold">{post.author}</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    {post.timestamp.toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <PostActions post={post} />
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    {editingPost === post.id ? (
                                        <div className="space-y-2">
                                            <Textarea
                                                value={editContent}
                                                onChange={(e) => setEditContent(e.target.value)}
                                                className="mb-2"
                                            />
                                            <div className="flex gap-2">
                                                <Button
                                                    size="sm"
                                                    onClick={() => saveEditedPost(post.id)}
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setEditingPost(null)}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="mb-4">{post.content}</p>
                                            {post.image && (
                                                <div className="relative h-64 mb-4">
                                                    <Image
                                                        src={post.image}
                                                        alt="Post image"
                                                        fill
                                                        className="object-cover rounded-lg"
                                                    />
                                                </div>
                                            )}
                                            <div className="flex items-center gap-4">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleLike(post.id)}
                                                >
                                                    <ThumbsUp className="w-4 h-4 mr-2" />
                                                    {post.likes}
                                                </Button>
                                                <Button variant="ghost" size="sm">
                                                    <MessageCircle className="w-4 h-4 mr-2" />
                                                    {post.comments.length}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </CardContent>
                                <CardFooter>
                                    <div className="w-full">
                                        <Input
                                            placeholder="Write a comment..."
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') {
                                                    handleComment(post.id, (e.target as HTMLInputElement).value);
                                                    (e.target as HTMLInputElement).value = '';
                                                }
                                            }}
                                        />
                                        {post.comments.map((comment) => (
                                            <div key={comment.id} className="mt-4 pl-4 border-l-2">
                                                <p className="font-semibold text-sm">{comment.author}</p>
                                                <p className="text-sm">{comment.content}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {comment.timestamp.toLocaleDateString()}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default ForumPage;
