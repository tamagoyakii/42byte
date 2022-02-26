package com.blind.api.domain.comment.dto;

import com.blind.api.domain.comment.domain.Comment;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class CommentDTO {
    private Long id;
    private Long boardId;
    private Long postId;
    private Long authorId;
    private String content;
    private Long likeCnt;
    private Long blameCnt;
    private Boolean isAuthor;
    private Integer isDel;
    private Boolean isUsers;
    private Boolean isLiked;
    private List<ReCommentDTO> recomments;
    private LocalDateTime createdDate;
    private LocalDateTime modifiedDate;

    public static CommentDTO from(Comment comment) {
        return CommentDTO.builder()
                .id(comment.getId())
                .boardId(comment.getBoardId())
                .postId(comment.getPost().getId())
                .authorId(comment.getAuthorId())
                .content(comment.getContent())
                .likeCnt(comment.getLikeCnt())
                .blameCnt(comment.getBlameCnt())
                .isAuthor(comment.getIsAuthor())
                .isDel(comment.getIsDel())
                .createdDate(comment.getCreatedDate())
                .modifiedDate(comment.getModifiedDate())
                .build();
    }

    @Builder
    private CommentDTO(Long id, Long boardId, Long postId, Long authorId, String content, Long likeCnt, Long blameCnt, Boolean isAuthor, Integer isDel, Boolean isLiked, LocalDateTime createdDate, LocalDateTime modifiedDate) {
        this.id = id;
        this.boardId = boardId;
        this.postId = postId;
        this.authorId = authorId;
        this.content = content;
        this.likeCnt = likeCnt;
        this.blameCnt = blameCnt;
        this.isAuthor = isAuthor;
        this.isDel = isDel;
        this.isLiked = isLiked;
        this.recomments = new ArrayList<>();
        this.createdDate = createdDate;
        this.modifiedDate = modifiedDate;
    }
}