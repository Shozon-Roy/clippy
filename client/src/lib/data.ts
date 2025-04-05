import { User, Video, TeamMember, Comment, Stats } from "@shared/schema";
import { useQuery } from "@tanstack/react-query";

export function useVideos() {
  return useQuery<Video[]>({
    queryKey: ['/api/videos'],
  });
}

export function useTeamMembers() {
  return useQuery<TeamMember[]>({
    queryKey: ['/api/team-members'],
  });
}

export function useComments() {
  return useQuery<Comment[]>({
    queryKey: ['/api/comments'],
  });
}

export function useStats() {
  return useQuery<Stats>({
    queryKey: ['/api/stats'],
  });
}

export function useUser() {
  return useQuery<User>({
    queryKey: ['/api/user'],
  });
}

export const recordingLimit = {
  current: 3,
  total: 5
};
