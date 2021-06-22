package lt.laurastasiule.dto;

import lombok.*;
import lt.laurastasiule.model.Client;
import lt.laurastasiule.model.Item;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ItemDto {
    private long id;
    private String title;
    private String weight;
    private short sectorNo;
    private LocalDate placementDate;
    private long clientId;

    public ItemDto(Item item) {
        this.title = item.getTitle();
        this.weight = item.getWeight();
        this.sectorNo = item.getSectorNo();
        this.placementDate = item.getPlacementDate();
        this.clientId = item.getClient().getId();
    }
}
