package lt.laurastasiule.controller;

import io.swagger.annotations.Api;
import javassist.NotFoundException;
import lt.laurastasiule.dto.ItemDto;
import lt.laurastasiule.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Api(value = "item")
@RequestMapping(value = "/api/items")
public class ItemController {

    private final ItemService itemService;

    @Autowired
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    @GetMapping
    public List<ItemDto> getItems() {
        return itemService.getItems();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void createItem(@RequestBody ItemDto itemDto) throws NotFoundException {
        itemService.createItem(itemDto);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ItemDto getItem(@PathVariable final long id) throws NotFoundException {
        return itemService.getItem(id);
    }

    @PutMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateItem(@PathVariable final long id, @RequestBody ItemDto itemDto) {
        try {
            itemService.updateItem(id, itemDto);
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removeItem(@PathVariable final long id) {
        itemService.deleteItem(id);
    }
}

