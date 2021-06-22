package lt.laurastasiule.model;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Report {

    @Setter(AccessLevel.NONE)
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String title;
    @NotNull
    private LocalDateTime reportTime = LocalDateTime.now();

    @ManyToMany
    private List <Client> clientsWithMaxItemWeight = new ArrayList<>();
    @ManyToMany
    private List <Client> clientsWithMaxItems = new ArrayList<>();
}
