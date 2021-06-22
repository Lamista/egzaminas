package lt.laurastasiule.service;

import javassist.NotFoundException;
import lt.laurastasiule.dto.ItemDto;
import lt.laurastasiule.model.Client;
import lt.laurastasiule.model.Item;
import lt.laurastasiule.repository.IClientRepository;
import lt.laurastasiule.repository.IItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ItemService {

    private final IItemRepository itemRepository;
    private final IClientRepository clientRepository;

    @Autowired
    public ItemService(IItemRepository itemRepository, IClientRepository clientRepository) {
        this.itemRepository = itemRepository;
        this.clientRepository = clientRepository;
    }

    @Transactional(readOnly = true)
    public List<ItemDto> getItems() {

        return itemRepository.findAll()
                .stream()
                .map(db -> {
                    ItemDto itemDto = new ItemDto(db);
                    itemDto.setId(db.getId());
                    return itemDto;
                })
                .collect(Collectors.toList());
    }

    @Transactional
    public void createItem(ItemDto itemDto) throws NotFoundException {
        Optional<Client> clientOpt = clientRepository.findById(itemDto.getClientId());
        if (!clientOpt.isPresent()) {
            throw new NotFoundException("Client with id " + itemDto.getClientId() + " not found");
        }
        Client client = clientOpt.get();
        Item item = new Item(itemDto);
        client.addItem(item);
        item.setClient(client);

        itemRepository.save(item);
        clientRepository.save(client);
    }

    @Transactional(readOnly = true)
    public ItemDto getItem(long id) throws NotFoundException {
        Optional<Item> dbOpt = itemRepository.findById(id);

        if (dbOpt.isEmpty()) {
            throw new NotFoundException("Item with id " + id + " not found");
        }
        Item db = dbOpt.get();
        ItemDto dto = new ItemDto(db);
        dto.setId(db.getId());

        return dto;
    }

    @Transactional
    public void updateItem(long id, ItemDto itemDto) throws NotFoundException {
        Optional<Item> dbOpt = itemRepository.findById(id);

        if (dbOpt.isEmpty()) {
            throw new NotFoundException("Item with id " + id + " not found");
        }
        Item db = dbOpt.get();
        db.setTitle(itemDto.getTitle());
        db.setWeight(itemDto.getWeight());
        db.setSectorNo(itemDto.getSectorNo());
        db.setPlacementDate(itemDto.getPlacementDate());

        itemRepository.save(db);
    }

    @Transactional
    public void deleteItem(long id) {
        itemRepository.deleteById(id);
    }

}

