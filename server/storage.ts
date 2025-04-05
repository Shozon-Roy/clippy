import {
  users, type User, type InsertUser,
  videos, type Video, type InsertVideo,
  teamMembers, type TeamMember, type InsertTeamMember,
  comments, type Comment, type InsertComment,
  stats, type Stats, type InsertStats
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Video methods
  getAllVideos(): Promise<Video[]>;
  getVideo(id: number): Promise<Video | undefined>;
  createVideo(video: InsertVideo): Promise<Video>;
  
  // Team Member methods
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMember(id: number): Promise<TeamMember | undefined>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;
  
  // Comment methods
  getAllComments(): Promise<Comment[]>;
  getComment(id: number): Promise<Comment | undefined>;
  createComment(comment: InsertComment): Promise<Comment>;
  
  // Stats methods
  getStats(): Promise<Stats | undefined>;
  updateStats(stats: InsertStats): Promise<Stats>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private videos: Map<number, Video>;
  private teamMembers: Map<number, TeamMember>;
  private comments: Map<number, Comment>;
  private statsData: Stats | undefined;
  
  currentUserId: number;
  currentVideoId: number;
  currentTeamMemberId: number;
  currentCommentId: number;

  constructor() {
    this.users = new Map();
    this.videos = new Map();
    this.teamMembers = new Map();
    this.comments = new Map();
    
    this.currentUserId = 1;
    this.currentVideoId = 1;
    this.currentTeamMemberId = 1;
    this.currentCommentId = 1;
    
    // Initialize with some data
    this.initializeData();
  }

  private initializeData() {
    // Initialize stats
    this.statsData = {
      id: 1,
      videoCount: 20,
      memberCount: 20,
      commentCount: 40
    };
    
    // Create demo user
    this.createUser({
      username: "Shozon",
      password: "password123",
      avatar: ""
    });
    
    // Create sample videos
    const sampleVideos = [
      { title: "Never eat alone", author: "Keith Ferrazzi", thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
      { title: "Great Gatsby", author: "F.Scott Fitzgerald", thumbnail: "https://images.unsplash.com/photo-1539665344780-80b966f29ec9" },
      { title: "Sapiens", author: "Yuval Noah Harari", thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b" },
      { title: "The Book Thief", author: "Markus Zusak", thumbnail: "https://images.unsplash.com/photo-1544966545-85c8bc3de95b" },
      { title: "Sherlock Holmes", author: "Conan Doyle", thumbnail: "https://images.unsplash.com/photo-1543682704-15adeb008ac4" }
    ];
    
    sampleVideos.forEach(video => {
      this.createVideo({
        ...video,
        userId: 1
      });
    });
    
    // Create sample team members
    const sampleTeamMembers = [
      { name: "Marku Zuk", avatar: "https://i.pravatar.cc/150?img=1" },
      { name: "Brown", avatar: "https://i.pravatar.cc/150?img=2" },
      { name: "John Dore", avatar: "https://i.pravatar.cc/150?img=3" },
      { name: "Yuval Noah", avatar: "https://i.pravatar.cc/150?img=4" },
      { name: "J.K Row", avatar: "https://i.pravatar.cc/150?img=5" },
      { name: "Palacio", avatar: "https://i.pravatar.cc/150?img=6" }
    ];
    
    sampleTeamMembers.forEach(member => {
      this.createTeamMember(member);
    });
    
    // Create sample comments
    const sampleComments = [
      { title: "Fault In Our Stars", author: "John Dore", timestamp: "02:20:03", image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5" },
      { title: "Never Eat Alone", author: "Keith Ferrazzi", timestamp: "02:20:03", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4" },
      { title: "The Book Thief", author: "Markus Zusak", timestamp: "02:20:03", image: "https://images.unsplash.com/photo-1544966545-85c8bc3de95b" }
    ];
    
    sampleComments.forEach(comment => {
      this.createComment(comment);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Video methods
  async getAllVideos(): Promise<Video[]> {
    return Array.from(this.videos.values());
  }
  
  async getVideo(id: number): Promise<Video | undefined> {
    return this.videos.get(id);
  }
  
  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const id = this.currentVideoId++;
    const video: Video = { ...insertVideo, id };
    this.videos.set(id, video);
    return video;
  }
  
  // Team Member methods
  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }
  
  async getTeamMember(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }
  
  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentTeamMemberId++;
    const teamMember: TeamMember = { ...insertTeamMember, id };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }
  
  // Comment methods
  async getAllComments(): Promise<Comment[]> {
    return Array.from(this.comments.values());
  }
  
  async getComment(id: number): Promise<Comment | undefined> {
    return this.comments.get(id);
  }
  
  async createComment(insertComment: InsertComment): Promise<Comment> {
    const id = this.currentCommentId++;
    const comment: Comment = { ...insertComment, id };
    this.comments.set(id, comment);
    return comment;
  }
  
  // Stats methods
  async getStats(): Promise<Stats | undefined> {
    return this.statsData;
  }
  
  async updateStats(insertStats: InsertStats): Promise<Stats> {
    if (!this.statsData) {
      this.statsData = { ...insertStats, id: 1 };
    } else {
      this.statsData = { ...this.statsData, ...insertStats };
    }
    return this.statsData;
  }
}

export const storage = new MemStorage();
