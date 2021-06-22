package lt.laurastasiule.service;

import javassist.NotFoundException;
import lt.laurastasiule.dto.ClientDto;
import lt.laurastasiule.enums.ClientType;
import lt.laurastasiule.model.Client;
import lt.laurastasiule.repository.IClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.EnumSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ClientService {

    private final IClientRepository clientRepository;

    @Autowired
    public ClientService(IClientRepository clientRepository) {
        this.clientRepository = clientRepository;
    }

    @Transactional(readOnly = true)
    public List<ClientDto> getClients() {

        return clientRepository.findAll()
                .stream()
                .map(db -> new ClientDto(
                        db.getId(),
                        db.getFirstName(),
                        db.getLastName(),
                        db.getBirthDay(),
                        db.getPhoneNo(),
                        db.getClientType()))
                .collect(Collectors.toList());
    }

    @Transactional
    public void createClient(ClientDto clientDto) {

        Client client = new Client(
                clientDto.getFirstName(),
                clientDto.getLastName(),
                clientDto.getBirthDay(),
                clientDto.getPhoneNo(),
                clientDto.getClientType());

        clientRepository.save(client);
    }

    @Transactional(readOnly = true)
    public ClientDto getClient(long id) throws NotFoundException {
        Optional<Client> dbOpt = clientRepository.findById(id);

        if (dbOpt.isEmpty()) {
            throw new NotFoundException("Client with id " + id + " not found");
        }
        Client db = dbOpt.get();
        ClientDto dto = new ClientDto();
        dto.setId(db.getId());
        dto.setFirstName(db.getFirstName());
        dto.setLastName(db.getLastName());
        dto.setBirthDay(db.getBirthDay());
        dto.setPhoneNo(db.getPhoneNo());
        dto.setClientType(db.getClientType());

        return dto;
    }

    @Transactional
    public void updateClient(long id, ClientDto clientDto) throws NotFoundException {
        Optional<Client> dbOpt = clientRepository.findById(id);

        if (dbOpt.isEmpty()) {
            throw new NotFoundException("Client with id " + id + " not found");
        }
        Client db = dbOpt.get();
        db.setFirstName(clientDto.getFirstName());
        db.setLastName(clientDto.getLastName());
        db.setBirthDay(clientDto.getBirthDay());
        db.setPhoneNo(clientDto.getPhoneNo());
        db.setClientType(clientDto.getClientType());

        clientRepository.save(db);
    }

    @Transactional
    public void deleteClient(long id) {
        clientRepository.deleteById(id);
    }

    @Transactional(readOnly = true)
    public List<String> getClientTypes() {
        return EnumSet.allOf(ClientType.class).stream().map(ClientType::getTypeName).collect(Collectors.toList());
    }
}

